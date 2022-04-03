import useFetch from 'react-fetch-hook'
import ContactCards from './ContactCards'
import {useEffect, useState} from 'react'

const App = () => {
  const url = 'https://60ac9dff9e2d6b0017457815.mockapi.io/ag/contacts'
  const { data } = useFetch(url)
  console.log(data)
  const [contactList, setContactList] = useState()
  const [filterQuery, setFilterQuery] = useState()

  useEffect(() => {
    if (!filterQuery) {
      setContactList(data)
    } else {
      const queryString = filterQuery.toLowerCase()
      const filteredData = data?.filter(contacts => {
        const fullName = `${contacts.first_name} ${contacts.last_name}`

        // if it's just one letter, return all names that start with it
        if (queryString.length === 1) {
          const firstLetter = fullName.charAt(0).toLowerCase()
          return firstLetter === queryString
        }
        else {
          return fullName.toLowerCase().includes(queryString)
        }
      })
      setContactList(filteredData)
    }
  }, [data, filterQuery])

  return (
    <div className={"bg-gray-100"}>
      <section>
        <form>
          <input
            type={"text"}
            placeholder={"type here to filter..."}
            onChange={event => setFilterQuery(event.target.value)}
            className={"ml-20 mt-6 rounded-md p-2"}
          />
        </form>
      </section>
      <section className={"grid sm:grid-cols-2 md:grid-cols-4 gap-6 p-20"}>
        {contactList?.length < 1 && (
          <h1>No data matches your search</h1>
        )}
        <ContactCards contactList={contactList}/>
      </section>
    </div>
  )
}

export default App
