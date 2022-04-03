const ContactCards = ({ contactList }) => {
  return (
    <>
      {contactList?.map((contacts) => (
        <figure className="bg-white text-white h-80 rounded-lg shadow-md" key={contacts.id}>
          <img alt="user" className="w-33 h-33 rounded-full mx-auto mt-7" src={contacts.avatar} />
          <figcaption className="text-center mt-5">
            <p className="text-gray-700 font-semibold text-xl mb-2">
              {contacts.first_name} {contacts.last_name}
            </p>
            <p className="text-gray-500">
              <span className="font-medium">email: </span>{contacts.email}
            </p>
            <p className="text-gray-500">
              <span className="font-medium">phone: </span>{contacts.phone}
            </p>
            <p className="text-gray-500">
              <span className="font-medium">company: </span>{contacts.company}
            </p>
            <p className="text-gray-500">
              <span className="font-medium">job_title: </span>{contacts.job_title}
            </p>
          </figcaption>
        </figure>
      ))}
    </>
  )
}

export default ContactCards
