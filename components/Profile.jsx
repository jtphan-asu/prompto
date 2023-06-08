import PromptCard from './PromptCard';
import React from 'react'

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>{name} Profile</h1>
    </section>
  )
}

export default Profile