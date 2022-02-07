// This file was generated by purescript-docs-search.
window.DocsSearchIndex["18"] = [["t4",[{"values":[{"sourceSpan":{"start":[35,1],"name":".spago/functors/master/src/Data/Functor/Product/Nested.purs","end":[35,39]},"score":0,"packageInfo":{"values":["functors"],"tag":"Package"},"name":"T4","moduleName":"Data.Functor.Product.Nested","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","Product"],"Product"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","Product","Nested"],"T3"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"c"}]},{"tag":"TypeVar","contents":"z"}]}}]},"arguments":[["a",null],["b",null],["c",null],["z",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[87,1],"name":".spago/tuples/master/src/Data/Tuple/Nested.purs","end":[87,37]},"score":0,"packageInfo":{"values":["tuples"],"tag":"Package"},"name":"T4","moduleName":"Data.Tuple.Nested","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple","Nested"],"T3"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"c"}]},{"tag":"TypeVar","contents":"z"}]}}]},"arguments":[["a",null],["b",null],["c",null],["z",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[35,1],"name":".spago/miraculix-lite/v0.2.0-lite/src/deps/functors/Data/Functor/Product/Nested.purs","end":[35,39]},"score":0,"packageInfo":{"values":["miraculix-lite"],"tag":"Package"},"name":"T4","moduleName":"LocalDependency.Data.Functor.Product.Nested","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["LocalDependency","Data","Functor","Product"],"Product"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["LocalDependency","Data","Functor","Product","Nested"],"T3"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"c"}]},{"tag":"TypeVar","contents":"z"}]}}]},"arguments":[["a",null],["b",null],["c",null],["z",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[87,1],"name":".spago/miraculix-lite/v0.2.0-lite/src/deps/tuples/Data/Tuple/Nested.purs","end":[87,37]},"score":0,"packageInfo":{"values":["miraculix-lite"],"tag":"Package"},"name":"T4","moduleName":"LocalDependency.Data.Tuple.Nested","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["LocalDependency","Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["LocalDependency","Data","Tuple","Nested"],"T3"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"c"}]},{"tag":"TypeVar","contents":"z"}]}}]},"arguments":[["a",null],["b",null],["c",null],["z",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"}]],["euclideanring",[{"values":[{"sourceSpan":{"start":[63,1],"name":".spago/prelude/master/src/Data/EuclideanRing.purs","end":[66,21]},"score":1,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"EuclideanRing","moduleName":"Data.EuclideanRing","info":{"values":[{"superclasses":[{"constraintClass":[["Data","CommutativeRing"],"CommutativeRing"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]}],"fundeps":[],"arguments":[["a",null]]}],"tag":"TypeClassResult"},"hashAnchor":"t","comments":"The `EuclideanRing` class is for commutative rings that support division.\nThe mathematical structure this class is based on is sometimes also called\na *Euclidean domain*.\n\nInstances must satisfy the following laws in addition to the `Ring`\nlaws:\n\n- Integral domain: `one /= zero`, and if `a` and `b` are both nonzero then\n  so is their product `a * b`\n- Euclidean function `degree`:\n  - Nonnegativity: For all nonzero `a`, `degree a >= 0`\n  - Quotient/remainder: For all `a` and `b`, where `b` is nonzero,\n    let `q = a / b` and ``r = a `mod` b``; then `a = q*b + r`, and also\n    either `r = zero` or `degree r < degree b`\n- Submultiplicative euclidean function:\n  - For all nonzero `a` and `b`, `degree a <= degree (a * b)`\n\nThe behaviour of division by `zero` is unconstrained by these laws,\nmeaning that individual instances are free to choose how to behave in this\ncase. Similarly, there are no restrictions on what the result of\n`degree zero` is; it doesn't make sense to ask for `degree zero` in the\nsame way that it doesn't make sense to divide by `zero`, so again,\nindividual instances may choose how to handle this case.\n\nFor any `EuclideanRing` which is also a `Field`, one valid choice\nfor `degree` is simply `const 1`. In fact, unless there's a specific\nreason not to, `Field` types should normally use this definition of\n`degree`.\n\nThe `EuclideanRing Int` instance is one of the most commonly used\n`EuclideanRing` instances and deserves a little more discussion. In\nparticular, there are a few different sensible law-abiding implementations\nto choose from, with slightly different behaviour in the presence of\nnegative dividends or divisors. The most common definitions are \"truncating\"\ndivision, where the result of `a / b` is rounded towards 0, and \"Knuthian\"\nor \"flooring\" division, where the result of `a / b` is rounded towards\nnegative infinity. A slightly less common, but arguably more useful, option\nis \"Euclidean\" division, which is defined so as to ensure that ``a `mod` b``\nis always nonnegative. With Euclidean division, `a / b` rounds towards\nnegative infinity if the divisor is positive, and towards positive infinity\nif the divisor is negative. Note that all three definitions are identical if\nwe restrict our attention to nonnegative dividends and divisors.\n\nIn versions 1.x, 2.x, and 3.x of the Prelude, the `EuclideanRing Int`\ninstance used truncating division. As of 4.x, the `EuclideanRing Int`\ninstance uses Euclidean division. Additional functions `quot` and `rem` are\nsupplied if truncating division is desired.\n"}],"tag":"SearchResult"}]]]