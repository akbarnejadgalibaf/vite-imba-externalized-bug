# Externalized module bug 

If I install something like `object-hash`: 

In plain vite, there are no warings. 

But, if I use imba, I see the following warning: 


```
Module "crypto" has been externalized for browser compatibility. Cannot access "crypto.getHashes" in client code. See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.
```

To try it yourself: 

```bash 
cd vite-plain 
bun install 
bun run dev 
# Open the browser and see no warnings. 

cd vite-with-imba 
bun install
bun run dev 
# Open the browser and see the warning.
```
