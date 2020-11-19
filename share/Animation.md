# 动画原理

 > 所谓的动画，就是通过一些列的运动形成的动的画面。在网页中，我们可以通过不断的改变元素的css值，来达到动的效果。

## javascript 动画常用的api

1. setInterval() => clearInterval();
1. setTimeout() => clearSetTimeout();
1. requestAnimationFrame() => cancelAnimationFrame();

## 动画小示例

**1、简单的方块运动**
``` javascript{number} 
    const $div = document.getElementById('div');
    function step() {
      requestAnimationFrame(function change() {
        const leftDis =  $div.offsetLeft + 2;
        $div.style.left = `${leftDis}px`;
        requestAnimationFrame(change) // 递归调用，实现动画
      })
    }
    step()
```

**2、用时间来控制方块运动**

> 在我们平时工作的时候， 动画不可能一直以增量的方式一直运动下去， 这是我们就需要一个时间来控制动画， 把动画控制在一个时间、空间范围内

```javascript
// 点击， 动画2s向右移动600
$div.addEventListener('click', () => {
  const startTime = new Date();
  const distance = 600;
  const duration = 2000;
  requestAnimationFrame(function change() {
    const current = Date.now(); 
    const p = Math.min(1.0, (current - startTime) / duration);
    $div.style.transform = `translateX(${distance * p}px)`;
    if (p < 1) { // 控制条件， 当时间是2s的时候，不在递归
      requestAnimationFrame(change)
    }
  })
})
```

**3、匀加速、匀减速**

> 当我们觉着匀速太单调的话， 就给它来点刺激吧

``` javascript
$div.addEventListener('click', () => {
  const startTime = new Date();
  const distance = 600;
  const duration = 2000;
  requestAnimationFrame(function change() {
    const current = Date.now();
    const p = Math.min(1.0, (current - startTime) / duration);
    // $div.style.transform = `translateX(${distance * p * p}px)`; // 匀加速
    $div.style.transform = `translateX(${distance * p * (2 - p)}px)`; // 匀减速
    if (p < 1) {
      requestAnimationFrame(change)
    }
  })
})
```

**4、自由落体**

``` javascript
  // 公式：h=(1/2)gt^2 
  $div.addEventListener('click', () => {
    const startTime = new Date();
    const disX = 400;
    const disY = 400;
    const duration = Math.sqrt((2 * disY) / 10 / 9.8) * 1000;
    requestAnimationFrame(function change() {
      const current = Date.now();
      const p = Math.min(1.0, (current - startTime) / duration);
      const dx = disX * p;
      const dy = disY * p * p;
      $div.style.transform = `translate3d(${dx}px, ${dy}px, 0px)` 
      if (p < 1) {
        requestAnimationFrame(change)
      }
    })
  })

```

**5、正弦曲线**

``` javascript
  $div.addEventListener('click', () => {
    const startTime = Date.now();
    const distance = 200;
    const duration = 2000;
    requestAnimationFrame(function change() {
      const p = Math.min(1.0, (Date.now() - startTime) / duration);
      const ty = distance * Math.sin(4 * Math.PI * p);
      const tx = 4 * distance * p;
      $div.style.transform = `translate(${tx}px, ${ty}px)`;

      if (p < 1.0) {
        requestAnimationFrame(change)
      }
    })
  })
```

**6、圆周运动**

``` javascript
  // x = R.sin(2πp) , y = R.cos(2πp)
  $div.addEventListener('click', () => {
    const startTime = Date.now();
    const r = 100;
    const duration = 2000;
    requestAnimationFrame(function change() {
       const p = Math.min(1.0, (Date.now() - startTime) / duration);
       const tx = r * Math.sin(2 * Math.PI * p);
       const ty = -r * Math.cos(2 * Math.PI * p);
       $div.style.transform = `translate(${tx}px, ${ty}px)`

       if (p < 1.0) requestAnimationFrame(change)
    })
  })
```

## 动画算子

> 对于一些比较复杂的变化，算法也比较复杂，就要用到动画算子。动画算子 是一个函数，可以把进度转化成另外一个值。其实也就是一种算法。

我们总结一下上面的各类动画，发现它们是非常相似的，匀速运动、匀加速运动、匀减速运动、圆周运动唯一的区别仅仅在于位移方程：


1、匀速运动：
 
``` javascript
 s = S * p  // 算子 => e = p
```

2、匀加速运动：
 
``` javascript
 s = S * p ^ 2 // 算子 => e = p^2
```

3、匀加速运动：
 
``` javascript
 s = Sp(2-p)  // 算子 => e = p * (2 - p)
```

4、圆周运动

``` javascript
 x = Rsin(2PI * p) // x轴 算子 => e = sin(2 * PI *p)
 y = Rcos(2PI * p) // y轴 算子 => e = cos(2 * PI *p)
```

我们把共同的部分 S 或 R 去掉，得到一个关于 p 的方程 ,这个方程我们称为动画的算子(easing)，它决定了动画的性质。


### 常见的算子

``` javascript
var pow = Math.pow,
BACK_CONST = 1.70158;
const Easing = {
  // 匀速
  linear: function (t) {
    return t;
  },
  // 匀加速
  easeIn: function (t) {
    return t * t;
  },
  // 匀减速
  easeOut: function (t) {
    return (2 - t) * t;
  },
  // 先加速后减速
  easeBoth: function (t) {
    return (t *= 2) < 1 ? .5 * t * t : .5 * (1 - (--t) * (t - 2));
  },
  // 4次方加速
  easeInStrong: function (t) {
    return t * t * t * t;
  },
  // 4次方法的减速
  easeOutStrong: function (t) {
    return 1 - (--t) * t * t * t;
  },
  // 先加速后减速，加速和减速的都比较剧烈
  easeBothStrong: function (t) {
    return (t *= 2) < 1 ? .5 * t * t * t * t : .5 * (2 - (t -= 2) * t * t * t);
  },
  easeOutQuart: function (t) {
    return -(Math.pow((t - 1), 4) - 1)
  },
  // 指数变化 加减速
  easeInOutExpo: function (t) {
    if (t === 0) return 0;
    if (t === 1) return 1;
    if ((t /= 0.5) < 1) return 0.5 *Math.pow(2, 10 * (t - 1));
    return 0.5 * (-Math.pow(2, - 10 * --t) + 2);
  },
  //指数式减速
  easeOutExpo: function (t) {
    return (t === 1) ? 1 : -Math.pow(2, - 10 * t) + 1;
  },
  // 先回弹，再加速
  swingFrom: function (t) {
    return t * t * ((BACK_CONST + 1) * t - BACK_CONST);
  },
  // 多走一段，再慢慢的回弹
  swingTo: function (t) {
    return (t -= 1) * t * ((BACK_CONST + 1) * t + BACK_CONST) + 1;
  },
  //弹跳
  bounce: function (t) {
    var s = 7.5625,
    r;
    if (t < (1 / 2.75)) {
      r = s * t * t;
    } else if (t < (2 / 2.75)) {
      r = s * (t -= (1.5 / 2.75)) * t + .75;
    } else if (t < (2.5 / 2.75)) {
      r = s * (t -= (2.25 / 2.75)) * t + .9375;
    } else {
      r = s * (t -= (2.625 / 2.75)) * t + .984375;
    }
    return r;
  }

}

```










