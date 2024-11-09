export const Requirem = ({ requirem, eliminarRequirem }) => {

    const { id, nombre, tarea, desarrollador, prioridad, storyPoints, fecha, resumen } = requirem

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Tarea: {''}
                <span className="font-normal normal-case">{tarea}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Prioridad: {''}
                <span className="font-normal normal-case">{prioridad}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Story Points: {''}
                <span className="font-normal normal-case">{storyPoints}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha: {''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Resumen: {''}
                <span className="font-normal normal-case">{resumen}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Desarrollador: {''}
                <span className="font-normal normal-case">{desarrollador}</span>
            </p>

            <button
                className="bg-red-500 hover:bg-red-300 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={() => eliminarRequirem(id)}>
                Eliminar
            </button>
        </div>
    );
};
