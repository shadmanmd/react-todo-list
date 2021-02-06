# Deploying React App on Github Pages
- In the terminal, 
```
  npm install gh-pages --save-dev
```
- Make a Github repo as usual and push everything to it.
- Go to package.json
  - Add a homepage url
	```
	"homepage" : "http://[github-username].github.io/[repository-name]
	```
	- Inside scripts add two scripts 
	```
	  "predeploy": "npm run build",
		"deploy": "gh-pages -d build"
	```
- In the terminal, 
```
npm run deploy
```
