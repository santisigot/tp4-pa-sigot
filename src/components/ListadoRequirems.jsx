import { Requirem } from "./Requirem";

export const ListadoRequirems = ({ requirems, setRequirems }) => {


    const eliminarRequirem = (id) => {
        console.log('Eliminando requerimiento con id:', id)
        const requiremsActualizadas = requirems.filter(requirem => requirem.id !== id)
        console.log('Requerimientos actualizados:', requiremsActualizadas)
        setRequirems(requiremsActualizadas)
    };
    

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
            <h2 className="font-black text-3xl text-center">Listado de Requerimientos</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {''} <span className="text-red-600 font-bold">Requerimientos</span> aquí
            </p>

            {console.log('Requerimientos en render:', requirems)}

            {requirems.length === 0 ? (
                <p className="text-center">No hay requerimientos</p>
                ) : (
                    
                    requirems.map(requirem => (
                    <Requirem 
                        key={requirem.id}
                        requirem={requirem}
                        eliminarRequirem={eliminarRequirem}
                    />
                ))
            )}
        </div>
    );
};
