// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1878673464"] = [{"values":[{"sourceSpan":{"start":[30,1],"name":".spago/miraculix-lite/v0.2.0-lite/src/deps/contravariant/Data/Equivalence.purs","end":[30,65]},"score":0,"packageInfo":{"values":["miraculix-lite"],"tag":"Package"},"name":"comparisonEquivalence","moduleName":"LocalDependency.Data.Equivalence","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["LocalDependency","Data","Comparison"],"Comparison"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["LocalDependency","Data","Equivalence"],"Equivalence"]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"An equivalence relation for any `Comparison`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[18,1],"name":".spago/prelude/master/src/Data/NaturalTransformation.purs","end":[18,54]},"score":1,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"NaturalTransformation","moduleName":"Data.NaturalTransformation","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"g"},{"tag":"TypeVar","contents":"a"}]}]},null]},"arguments":[["f",null],["g",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"A type for natural transformations.\n\nA natural transformation is a mapping between type constructors of kind\n`k -> Type`, for any kind `k`, where the mapping operation has no ability\nto manipulate the inner values.\n\nAn example of this is the `fromFoldable` function provided in\n`purescript-lists`, where some foldable structure containing values of\ntype `a` is converted into a `List a`.\n\nThe definition of a natural transformation in category theory states that\n`f` and `g` should be functors, but the `Functor` constraint is not\nenforced here; that the types are of kind `k -> Type` is enough for our\npurposes.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[30,1],"name":".spago/contravariant/master/src/Data/Equivalence.purs","end":[30,65]},"score":0,"packageInfo":{"values":["contravariant"],"tag":"Package"},"name":"comparisonEquivalence","moduleName":"Data.Equivalence","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Comparison"],"Comparison"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Equivalence"],"Equivalence"]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"An equivalence relation for any `Comparison`.\n"}],"tag":"SearchResult"}]