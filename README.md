# Parallel Mergesort

Implement a parallel version of mergesort (both the original recursive and the
iterative in-place version from a previous exercise are fine). You may use any
parallelization framework or method.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the span of the parallel program, in terms of worst-case $\Theta$? Hint:
It may help to consider the DAG of the parallel program.

-----------------------------------------------------------------------------------

My complexity is $\Theta(nlogn)$ which is no different then the normal for mergesort, 

The span is the length of the longest series of operations that have to be done.  

Since this mergesort must still operate as a regular merge sort in the sorting process itself it will still have an complexity of $nlogn$.

This on paper is no different to regular mergesort, the difference is that in practice since it is running in parallel it is much faster since it is doing the operations all at once rather than individually.

So while the complexity is still $\Theta(nlogn)$ the actual practical runtime is going to be must faster.

I was having a bunch of trouble making tests for this program, so I went into the repositories to see if anyone had the same idea I did, as happens one Caden Mcfate did, I borrowed his test for this exercise which can be found here (https://github.com/COSC3020/parallel-mergesort-cadenmcfate)

I used two resources to better wrap my head around how to do the complexity; Introduction to Algorithms by Cormen et al, and the wikipedia page for analysis of parallel algorithms (https://en.wikipedia.org/wiki/Analysis_of_parallel_algorithms)

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice
