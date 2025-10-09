// get
export const loadList = () => {
  try {
    const data = localStorage.getItem('installed')
    return data ? JSON.parse(data) : []
  } catch (err) {
    console.log(err)
    return []
  }
}

// save
export const updateList = app => {
  const list = loadList()

  try {
    const isDuplicate = list.some(p => p.id === app.id)
    if (isDuplicate) return alert('Already added in list')
    const updatedlist = [...list, app]
    localStorage.setItem('installed', JSON.stringify(updatedlist))
  } catch (err) {
    console.log(err)
  }
}

// delete
export const removeFromlist = id => {
  const list = loadList()
  try {
    const updatedlist = list.filter(p => p.id !== id)
    localStorage.setItem('installed', JSON.stringify(updatedlist))
  } catch (err) {
    console.log(err)
  }
}