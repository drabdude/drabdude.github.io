---
layout: page
title: Fast solvers for HSS matrices
description: Structured linear algebra for least-squares and minimum-norm problems
importance: 1
category: current
---

Advised by [Heather Wilber](https://amath.washington.edu/people/heather-wilber), University of Washington, 2024 – present.

Hierarchically semi-separable (HSS) matrices have off-diagonal blocks that are numerically low rank, which makes it possible to store them and solve linear systems with them far faster than with a dense matrix. I develop and analyze algorithms that exploit this structure for linear optimization problems. In the square case, the standard approach is the ULV factorization; I have developed a new algorithm for the minimum-norm problem with HSS matrices that reduces to the ULV solve when the matrix is square.

I am also developing publicly accessible MATLAB classes to make computations with these structured matrices efficient and robust.

<!-- FIGURE: add a timing/accuracy plot or a picture of the HSS block structure here, e.g.
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/hss.png" title="" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">Caption.</div>
-->

**Talks:** SIAM Conference on Mathematics of Data Science (Nov. 2026); Joint Mathematics Meetings (Jan. 2027).
