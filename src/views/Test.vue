<template>
  <div class="">
    <div class="bg-indigo-200 ml-5 mt-5 mr-5 px-2 py-2 rounded-lg">
      <span class="text-lg">TEST PAGE</span>
    </div>
    <br />
    <!-- container for the books listing -->
    <div class="container ml-10" v-if="user">
      <h1>Books</h1>

        <ul v-for="book in books" :key="book.id" >
              <li @click="handleDelete(book)" class="hover:line-through">
                Title: {{ book.title }}
              </li>
              <li>Author: {{ book.author }}</li>
              <li
                @click="handleUpdate(book)"
                class="hover:bg-gray-300 hover:rounded-lg text-red-500"
                :class="{ 'text-green-500': book.isFav }"
              >
                Favourite: {{ book.isFav }}
              </li>
              <br />
          </ul> 
    </div>

  <!-- Container for adding documents -->
    <div class="container ml-10">
      Add new documents
      <div>
        <form @submit.prevent="handleSubmit">
          <h3>Add a New Book</h3>

          <label for="title">Book title:</label>
          <input
            type="text"
            name="title"
            v-model="title"
            required
            class="bg-yellow-100 rounded-lg m-5 p-2"
          />

          <label for="author">Book author:</label>
          <input
            type="text"
            name="author"
            v-model="author"
            required
            class="bg-yellow-100 rounded-lg m-5 p-2"
          />

          <button class="bg-green-300 m-2 p-2 rounded-lg">Add Book</button>
        </form>

        <br />

        <div>
          <SignUp />
        </div>

        
      </div>

      
    </div>

    <div class="bg-gray-200 p-2">
          <Login />
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "@vue/reactivity";
import getCollection from "@/composables/getCollection"
import getUser from '@/composables/getUser'
import SignUp from "@/components/Signup.vue";
import Login from "@/components/Login.vue";

// Firebase imports
import { db } from "../firebase/config";
import {
  addDoc,
  collection,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { onBeforeMount } from '@vue/runtime-core';

export default {
  name: "Home",
  components: { SignUp, Login },
  setup() {
onBeforeMount(() => {
      


})

// Getting collections to display
    const { user } = getUser()
    
      const { documents: books } = getCollection("books");
//, ['userUid', '==', user.value.uid]
    
    // Adding new docs
    const title = ref("");
    const author = ref("");

    const handleSubmit = async () => {
      const colRef = collection(db, "books");

      await addDoc(colRef, {
        title: title.value,
        author: author.value,
        isFav: false,
        userUid: user.value.uid
      });

      // reset the form
      title.value = "";
      author.value = "";
    };

    const handleDelete = (book) => {
      const docRef = doc(db, "books", book.id);
      deleteDoc(docRef);
    };

    const handleUpdate = (book) => {
      const docRef = doc(db, "books", book.id);

      updateDoc(docRef, {
        isFav: !book.isFav,
      });
    };

    return { books, handleSubmit, handleDelete, handleUpdate, title, author, user };
  },
};
</script>
