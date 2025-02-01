# React Router Dom v6 Nested Route Matching Issue
This repository demonstrates a bug in React Router Dom v6 where nested routes with wildcard path parameters (*) don't match as expected.  The issue occurs when a nested route with a wildcard parameter is present. The wildcard route will unintentionally catch routes meant for sibling routes. 

## Bug Description:
The provided code uses nested routes.  The wildcard route `/users/*` is intended to match any path under `/users`. However, it unexpectedly matches routes such as `/about`, which should be handled by a different route. This leads to incorrect component rendering and unexpected application behavior.

## Solution:
The solution involves restructuring the routes to ensure that the wildcard route matches only what is intended.