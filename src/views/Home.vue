<template>
  <div class="">
    <div class="bg-yellow-500 ml-5 mt-5 mr-5 px-2 py-2 rounded-lg">
      This is the home page
    </div>
    <br />
    <div class="container ml-10">
      <h1>Books</h1>

      <ul v-for="book in books" :key="book.id">
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
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "@vue/reactivity";
import getCollection from "@/composables/getCollection";
import SignUp from "@/components/Signup.vue";

// Firebase imports
import { db } from "../firebase/config";
import {
  addDoc,
  collection,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

export default {
  name: "Home",
  components: { SignUp },
  setup() {
    // Getting collections to display
    const { documents: books } = getCollection("books");

    // Adding new docs
    const title = ref("");
    const author = ref("");

    const handleSubmit = async () => {
      const colRef = collection(db, "books");

      await addDoc(colRef, {
        title: title.value,
        author: author.value,
        isFav: false,
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

    return { books, handleSubmit, handleDelete, handleUpdate, title, author };
  },
};
</script>
