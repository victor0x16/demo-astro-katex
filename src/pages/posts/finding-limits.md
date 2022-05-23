---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  import Cool from '../../components/Author.astro'
  import AstroKatex from '../AstroKatex.astro'
  import Expression from '../OnlyExpression.astro'
title: Finding Limits - Properties of Limits
publishDate: 23 May 2022
name: Victor Souza
value: 128
description: Just an introduction to Calculus
---

<Cool name={frontmatter.name} href="#" client:load />

# Finding Limits - Properties of Limits


<AstroKatex is:raw>

Consider the rational function

$$ f(x) = \frac{x^2-6x-7}{x-7} $$

The function can be factored as follows:

$$f(x) = \frac{\cancel{(x-7)}(x+1)}{\cancel{(x-7)}}$$

which gives us

$$f(x) = x+1, x \neq 7$$

<p>Does this mean the function  \(f(x)\)  is the same as the function  \(g(x)=x+1\)?</p>

<p>The answer is no. Function \(f(x)\)  does not have  \(x=7\) in its domain, but  \(g(x)\)  does. Graphically, we observe there is a hole in the graph of  \(f(x)\)  at  \(x=7\) , as shown in Figure A (left) and no such hole in the graph of \(g(x)\) , as shown in Figure B (Right).</p>

</AstroKatex>

![graphs](/demo-astro-katex/f-g-functions.png)


<AstroKatex is:raw>
  So, do these two different functions also have different limits as  \(x\)  approaches \(7\)? Not necessarily. Remember, in determining a limit of a function as  \(x\)  approaches  a , what matters is whether the output approaches a real number as we get close to  \(x=a\) . The existence of a limit does not depend on what happens when  \(x\)  equals  \(a\) .
</AstroKatex>

<AstroKatex is:raw>
  Look again at \(\textbf{Figure A} \) and \(\textbf{Figure B}\). Notice that in both graphs, as  \(x\)  approaches \(7\), the output values approach \(8\). This means
  \[
    \lim_{x \to 7} f(x) = \lim_{x \to 7} g(x)
  \]
</AstroKatex>

<Expression is:raw>
 \textbf{End...}
</Expression>