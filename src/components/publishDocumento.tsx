"use client";
import React, { useState } from 'react';

export default function PublishDocumentForm() {
    const [authors, setAuthors] = useState('');
    const [categories, setCategories] = useState('');
    const [tags, setTags] = useState([]);
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('');
    const [documentLink, setDocumentLink] = useState('');

    const handleFormSubmit = () => {
        const formData = {
            authors,
            categories,
            tags,
            title,
            status,
            documentLink,
        };

        const formDataJSON = JSON.stringify(formData);
        console.log('JSON:', formDataJSON);
        
    };

    return (
        <div className="max-w-2xl mx-auto mt-8 p-8 bg-white shadow-md rounded-md">
            <h1 className="text-3xl font-bold text-center mb-6">Nova Publicação</h1>

            <div className="mb-4">
                <label htmlFor="authors" className="block text-gray-700 text-sm font-bold mb-2">
                    Autor(es):
                </label>
                <input
                    type="text"
                    id="authors"
                    value={authors}
                    onChange={(e) => setAuthors(e.target.value)}
                    className="w-full bg-gray-300 border border-transparent p-2 rounded-md text-gray-800"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="categories" className="block text-gray-700 text-sm font-bold mb-2">
                    Categorias:
                </label>
                <input
                    type="text"
                    id="categories"
                    value={categories}
                    onChange={(e) => setCategories(e.target.value)}
                    className="w-full bg-gray-300 border border-transparent p-2 rounded-md text-gray-800"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Tags:</label>
                <div className="flex space-x-4">
                    <button onClick={() => setTags([...tags, 'TCC'])} className="bg-gray-500 text-white px-4 py-2 rounded-md">TCC</button>
                    <button onClick={() => setTags([...tags, 'IC'])} className="bg-gray-500 text-white px-4 py-2 rounded-md">IC</button>
                    <button onClick={() => setTags([...tags, 'Pesquisa'])} className="bg-gray-500 text-white px-4 py-2 rounded-md">Pesquisa</button>
                    <button onClick={() => setTags([...tags, 'Artigo'])} className="bg-gray-500 text-white px-4 py-2 rounded-md">Artigo</button>
                    <button onClick={() => setTags([...tags, 'Monografia'])} className="bg-gray-500 text-white px-4 py-2 rounded-md">Monografia</button>
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                    Título:
                </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-gray-300 border border-transparent p-2 rounded-md text-gray-800"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Status:</label>
                <div className="flex space-x-4">
                    <button onClick={() => setStatus('Concluído')} className="bg-gray-500 text-white px-4 py-2 rounded-md">Concluído</button>
                    <button onClick={() => setStatus('Andamento')} className="bg-gray-500 text-white px-4 py-2 rounded-md">Andamento</button>
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="documentLink" className="block text-gray-700 text-sm font-bold mb-2">
                    Link do Documento:
                </label>
                <input
                    type="text"
                    id="link"
                    value={documentLink}
                    onChange={(e) => setDocumentLink(e.target.value)}
                    className="w-full bg-gray-300 border border-transparent p-2 rounded-md text-gray-800"
                />
            </div>

            <button onClick={handleFormSubmit} className="bg-gray-500 text-white px-6 py-3 rounded-md">
                Publicar Documento
            </button>
        </div>
    );
}