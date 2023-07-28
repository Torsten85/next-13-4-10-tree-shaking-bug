This repo reproduces a tree shake error in next > 13.4.10

The error only occures in a production build. After building, the app throws an error:

`TypeError: e.fn is not a function`

Thats because next removes a used code block from @tippyjs/react (https://www.npmjs.com/package/@tippyjs/react?activeTab=code line 118 to 154).

**main branch** (13.4.13-canary.5) => crash
**downgrade branch** (13.4.9) => works