import { useState } from "react";

export const Formulario = ({ requirems, setRequirems }) => {
    const [nombre, setNombre] = useState('');
    const [tarea, setTarea] = useState('');
    const [desarrollador, setDesarrollador] = useState('');
    const [prioridad, setPrioridad] = useState('');
    const [storyPoints, setStoryPoints] = useState('');
    const [fecha, setFecha] = useState('');
    const [resumen, setResumen] = useState('');

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, tarea, desarrollador, prioridad, storyPoints, fecha, resumen].includes('')) {
            console.log('Hay al menos un campo vacío');
            setError(true);
            return;
        }

        setError(false);

        const objetoRequirem = {
            id: Date.now(),
            nombre,
            tarea,
            desarrollador,
            prioridad,
            storyPoints,
            fecha,
            resumen
        };

        setRequirems([
            ...requirems,
            objetoRequirem
        ]);

        setNombre('');
        setTarea('');
        setDesarrollador('');
        setPrioridad('');
        setStoryPoints('');
        setFecha('');
        setResumen('');
    };

    return (
        <div className="w-1/2">
            <h2 className="text-3xl text-center">Seguimiento de requerimientos</h2>

            <p className="font-black text-lg mt-5 text-center mb-10">
                Añadelos y <span className="text-red-600 font-bold">Adminístralos</span>
            </p>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                {error && <p className="text-red-600">Todos los campos son obligatorios</p>}

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="nombre"
                        type="text"
                        placeholder="Nombre del proyecto"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipoDeTarea">Tarea</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="tipoDeTarea"
                        type="text"
                        placeholder="Tarea asignada"
                        value={tarea}
                        onChange={(e) => setTarea(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="devAsignado">Desarrollador</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="devAsignado"
                        type="text"
                        placeholder="Nombre del desarrollador"
                        value={desarrollador}
                        onChange={(e) => setDesarrollador(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prioridad">Prioridad</label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="prioridad"
                        value={prioridad}
                        onChange={(e) => setPrioridad(e.target.value)}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="Alta">Alta</option>
                        <option value="Media">Media</option>
                        <option value="Baja">Baja</option>
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="storyPoints">Story Points</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="storyPoints"
                        type="number"
                        placeholder="Story points"
                        value={storyPoints}
                        onChange={(e) => setStoryPoints(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fechaDeInicio">Fecha de inicio</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="fechaDeInicio"
                        type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resumen">Resumen</label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="resumen"
                        placeholder="Resumen"
                        value={resumen}
                        onChange={(e) => setResumen(e.target.value)}
                    />
                </div>

                <button className="bg-red-600 hover:bg-red-700 w-full mt-5 p-2 text-white uppercase font-bold rounded" type="submit">
                    Agregar Requerimiento
                </button>
            </form>
        </div>
    );
};
