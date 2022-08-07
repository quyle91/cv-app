const NoPage = () => {
  document.body.classList.remove(...document.body.classList)
  document.body.classList.add("404")
  return <h1>404</h1>
}

export default NoPage