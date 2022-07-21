import Container from "./container";
import { useState } from "react";

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function FormAuthor() {
  const emptyDataForm = {
    title: "",
    tag: "",
    excerpt: "",
    coverImage: "",
    date: "",
    name: "",
    picture: "",
    url: "",
    content: "",
  };
  const [dataForm, setDataForm] = useState({
    title: "",
    tag: "",
    excerpt: "",
    coverImage: "",
    date: "",
    name: "",
    picture: "",
    url: "",
    content: "",
  });

  const onChangeInput = (e) =>
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log(dataForm);

    try {
      const res = await fetch("http://localhost:3333/post", {
        method: "POST",
        body: JSON.stringify(dataForm),
        headers: { "Content-Type": "application/json" },
      });

      const responseEnv = await res.json();

      if (responseEnv.erro) {
        console.log("Erro");
      } else {
        window.alert("Cadastrado com sucesso!");
        setDataForm(emptyDataForm);
      }
    } catch {
      console.log("Erro! Tente novamente!");
    }
  };
  return (
    <Container>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Post
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Preencha as informações
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={onSubmitForm}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-6 gap-0">
                    <div className="col-span-3 sm:col-span-6">
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Titulo
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="title"
                          id="title"
                          value={dataForm.title}
                          onChange={onChangeInput}
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-3 "
                          placeholder="Digite o titulo do post"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-0">
                    <div className="col-span-3 sm:col-span-6">
                      <label
                        htmlFor="tag"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Tag
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="tag"
                          id="tag"
                          value={dataForm.tag}
                          onChange={onChangeInput}
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-3 "
                          placeholder="Digite a tag do post"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-0">
                    <div className="col-span-3 sm:col-span-6">
                      <label
                        htmlFor="excerpt"
                        className="block text-sm font-medium text-gray-700"
                      >
                        excerpt
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="excerpt"
                          id="excerpt"
                          value={dataForm.excerpt}
                          onChange={onChangeInput}
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-3 "
                          placeholder="Digite seu excerpt"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-0">
                    <div className="col-span-3 sm:col-span-6">
                      <label
                        htmlFor="coverImage"
                        className="block text-sm font-medium text-gray-700"
                      >
                        coverImage
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="coverImage"
                          id="coverImage"
                          value={dataForm.coverImage}
                          onChange={onChangeInput}
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-3 "
                          placeholder="Digite seu coverImage"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-6 gap-0">
                    <div className="col-span-3 sm:col-span-6">
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        date
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="date"
                          id="date"
                          value={dataForm.date}
                          onChange={onChangeInput}
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-3 "
                          placeholder="Digite seu date"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-0">
                    <div className="col-span-3 sm:col-span-6">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={dataForm.name}
                          onChange={onChangeInput}
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-3 "
                          placeholder="Digite seu name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-0">
                    <div className="col-span-3 sm:col-span-6">
                      <label
                        htmlFor="picture"
                        className="block text-sm font-medium text-gray-700"
                      >
                        picture
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="picture"
                          id="picture"
                          value={dataForm.picture}
                          onChange={onChangeInput}
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-3 "
                          placeholder="Digite seu picture"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-0">
                    <div className="col-span-3 sm:col-span-6">
                      <label
                        htmlFor="url"
                        className="block text-sm font-medium text-gray-700"
                      >
                        url
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="url"
                          id="url"
                          value={dataForm.url}
                          onChange={onChangeInput}
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-3 "
                          placeholder="Digite seu url"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label
                      htmlFor="content"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Conteúdo (em md)
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="content"
                        name="content"
                        value={dataForm.content}
                        onChange={onChangeInput}
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Digite informações sobre você"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <a href="/">
                    {" "}
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Salvar
                    </button>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
