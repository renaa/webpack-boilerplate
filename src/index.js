import "./styles.css"
// import sum from './x'
debugger
console.log(`Running in ${process.env.NODE_ENV} mode`)
async function x() {
  console.log(await sum(2, 5))
}

async function sum(a, b) {
  setTimeout(() => {
    return a + b
  }, 3000)
}

x()
