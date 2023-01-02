# Notes

## Last Upate

2023-1-3

## 求导 推导公式

$$
f'(x) = lim_{\Delta x \to 0}\frac{f(x+\Delta x) - f(x)}{\Delta x}
$$

$$
lim_{x\to0}\frac{\sin x}{x} = 1
$$

$$
lim_{x\to0}\frac{1-\cos x}{x} = 0

$$

$$
\frac{\mathrm{d}}{\mathrm{dx}}e^x = e^x
$$

$$
a^x = e^{x\ln a}
$$

## 三角公式

$$
\sin(\alpha\pm\beta) = \sin(\alpha)\cos(\beta)\pm\cos(\alpha)\sin(\beta)
$$

$$
\cos(\alpha+\beta) = \cos\alpha\cos\beta-\sin\alpha\sin\beta
$$

$$
\cos(\alpha-\beta) = \cos\alpha\cos\beta+\sin\alpha\sin\beta
$$

## 等比例求和公式

$$
S_{n} = \frac{a_1(1-q^n)}{1-q}
$$

## 复合求导

$$
{(uv)}' = {u}'v+u{v}'
$$

$$
{(\frac{u}{v})}'=\frac{{u}'v-u{v}'}{v^2} (v\ne0)
$$

## Chain Rule

$$

\frac{\mathrm{d} y}{\mathrm{d} t} = \frac{\mathrm{d}y}{\mathrm{d}x}\frac{\mathrm{d}x}{\mathrm{d}t}

$$

## Implicit Differentiation

## Rules of Logs

$$
\ln(MN) = \ln M + \ln N
$$

$$
\ln\frac{M}{N} = \ln M - \ln N
$$

$$
\ln(M^k) = k\ln M
$$

$$
\ln(M^k) \ne (\ln M)^k
$$

$$
\log_bM = \frac{\ln M}{\ln b}
$$

## Value of e

$$
lim_{n\to\infty}(1+\frac{1}{n})^n = e^{lim_{n\to\infty}(\ln[(1+\frac{1}{n})^n])} = e^1 = e
$$

## Key Notes

$$
(e^{a} + e^{-a})(e^{b}-e^{-b})=e^{a+b}+e^{b-a}-e^{a-b}-e^{-a-b}
$$

## Reading

[Derivatives of Hyperbolic Sine and Cosine](./doc/Derivatives_of_Hyperbolic_Sine_and_Cosine.pdf)

## Applications of Differentiation

### Liner Approximations

> When using linear approximation, we replace the formula describing a curve by the formula of a straight line. This makes calculation and estimation much easier.

$$
f(x) \approx f(x_0) + f'(x_0)(x-x_0)
$$

### Quadratic Approximation

>Linear approximation uses the first derivative to find the straight line that most closely resembles a curve at some point. Quadratic approximation uses the first and second derivatives to find the parabola closest to the curve near a point.

> use these when linear is not enough
$$
f(x) \approx  f(x_0) + f'(x_0)(x-x_0) + \frac{f''(x_0)}{2}(x-x_0)^2
$$

### Sketching Graphs

#### Curve Sketching

```txt
Goal: Draw graph of f using f', f'' postive/negative
```

```txt
Warning: Do't abandon your precalulus skills and common sense !!!
```

- f' > 0 --> f is increasing
- f' < 0 --> f is decreasing
- f'' > 0  --> f' is increasing -> concave up
- f'' < 0  --> f' is decreasing -> concace down

> If $f'(x_0) = 0$, we call $x_0$ a **critial point**

> $y_0 = f(x_0)$ is a **critial value**.

> $f' \ne 0 $ f can't backtrack

##### General strategy

1. Plot:

    a. discontinuities(especially infinite)

    b. endpoints(or $x\to\pm\infty$)

    c. easy pts(optional)

2. a) solve $f'(x) = 0$

   b) Plot crit pts and values

3. Decide whether $f' < 0$ or $f' > 0$ ineach interval between critial pts/discont (consistent with 1&2)

4. $f'' > 0$ or $f'' < 0$ concave up/down; $f''(x_0) = 0 \Leftrightarrow x_0 inflection pts$

5. combine

### Optimization Problems

KEY TO FINDING MAX & MIN , ONLY NEED TO LOOK AT CRITICAL POINTS AND END POINTS AND POINTS OF DISCONTINUITY

### Introduction to Related Rates

```text
The derivative tells us how a change in one variable affects another variable. Related rates problems ask how two different derivatives are related. For example, if we know how fast water is being pumped into a tank we can calculate how fast the water level in the tank is rising. The chain rule is the key to solving such problems.
```

Surface area of a sphere
$$
S=4\pi r^2
$$

## Bookmark

[Session 32: Ring on a String](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-2-applications-of-differentiation/part-b-optimization-related-rates-and-newtons-method/session-32-ring-on-a-string/)
