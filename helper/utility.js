const fetchJSON = async (url, options = {}) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + url,
      options
    )
    if (!response.ok) {
      const data = await response.json()
      return alert(data.msg)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export { fetchJSON }
