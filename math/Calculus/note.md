# Notes

## Last Upate

2022-12-21

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

## Bookmark

[Session 25: Introduction to Quadratic Approximation](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-2-applications-of-differentiation/part-a-approximation-and-curve-sketching/session-25-introduction-to-quadratic-appoximation/)
