# View model builder

To apply the MVVM pattern is necessary to have different view models for every "big" model, something that adapts to the view needs.

MVVM is achievable by using a view model builder for every model that has to be adapted.

## Pro
- In this way, there is only a single point where view models props build, by making everything easy to maintain, with only one source of truth: the builder.
- Less redundant code