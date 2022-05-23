---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  import Cool from '../../components/Author.astro'
  import AstroKatex from '../AstroKatex.astro'
  import Expression from '../OnlyExpression.astro'
title: Surds
publishDate: 23 May 2022
name: Victor Souza
value: 128
description: Surds - easy maths
---

# Surds

Some numbers cannot be written as exact decimals or fractions for example:

<Expression is:raw>
\sqrt{3} = 1.732050...
\pi = 3.14159...
</Expression>

<AstroKatex is:raw>
    <p>Roots that cannot be written as exact decimals are called \(\textbf{surds}\). Leaving an answer in surd form means the answer is exact.</p>
</AstroKatex>

## Example

<AstroKatex is:raw>
<p>This square has an area of \(3m^2\). Calculate the length of each side.</p>
<AstroKatex>

![Square](/demo-astro-katex/square.png)

<AstroKatex is:raw>
<p>The length of each side is \(\sqrt{3}\). This answer is in surd form.</p>

<p>To find the answer in decimal form, find the square root of 3:</p>

$$ \sqrt{3} = 1.732050807568877...$$

<p>Rounded to 2 dp this gives the side length as 1.73 m.</p>

<p>To check this answer, \(1.73^2\) gives us \(2.9929m^2\).</p>

<p>The answer in surd form gives us a way to record the exact answer, which is useful if we want to use this value in further calculations to minimise rounding errors. While the answer in decimal form gives us an approximate answer that is useful if we want to use the answer for practical purposes, such as drawing the square.</p>
<AstroKatex>

<AstroKatex>
\(\textbf{End...}\)
</AstroKatex>