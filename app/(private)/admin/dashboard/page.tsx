import React from 'react'
import { UserButton } from '@clerk/nextjs'
//this component will show the information of the logged in user as well as it gives you sign in functionality
import { currentUser } from '@clerk/nextjs/server'
//we can only use this currentuser in a server component

async function DashboardPage() {
    const user = await currentUser();
    console.log("user:",user);
  return (
    <div className='p-5 flex flex-col gap-5' >
        <h1>Dashboard page</h1>
        <UserButton />

        <h1>
            Name: {user?.firstName} {user?.lastName}
        </h1>

        <h1>
            Id: {user?.id} 
        </h1>

        <h1>
            Email: {user?.emailAddresses[0].emailAddress} 
        </h1>
    </div>
  )
}

export default DashboardPage