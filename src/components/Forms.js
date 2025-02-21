import React from "react"

function Forms() {

  // function handleSubmit(event) {
  //   event.preventDefault()
  //   const formEl = event.currentTarget
  //   const formData = new FormData(formEl)
  //   console.log(formData)
  //   const newIngredient = formData.get("ingredient")
  // }
  
  function signUp(formData) {
    formData.preventDefault()
    const email = formData.get("email")
    console.log(email)
    // formData.reset()
  }
  
  return (
    <section>
      <h1>Signup form</h1>

      <form 
      action={signUp}
      // onSubmit={handleSubmit} method="post"
      >
        <label htmlFor="email">Email: </label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com"       defaultValue="@gmail.com"/>
        <br />
        
        <label htmlFor="password">Password: </label>
        <input id="password" type="password" name="password"/>
        <br />

        <button>Submit</button>

      </form>
    </section>
  );
}

export default Forms;