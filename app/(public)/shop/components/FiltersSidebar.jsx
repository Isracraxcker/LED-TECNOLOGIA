export default function FiltersSidebar({ filters, setFilters }) {
  return (
    <div className="w-full lg:w-64 bg-white p-4 rounded-xl shadow-sm h-fit">
      <h2 className="font-semibold text-lg mb-4">Filtros</h2>

      {/* BUSCAR */}
      <input
        type="text"
        placeholder="Buscar..."
        className="input input-bordered w-full mb-4"
        value={filters.search}
        onChange={(e) =>
          setFilters({ ...filters, search: e.target.value })
        }
      />

      {/* PRECIO */}
      <div className="mb-4">
        <p className="font-medium mb-2">Precio</p>
        <input
          type="number"
          placeholder="Min"
          className="input input-bordered w-full mb-2"
          onChange={(e) =>
            setFilters({ ...filters, min: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Max"
          className="input input-bordered w-full"
          onChange={(e) =>
            setFilters({ ...filters, max: e.target.value })
          }
        />
      </div>

      {/* CATEGORÍA */}
      <div>
        <p className="font-medium mb-2">Categoría</p>
        <select
          className="select select-bordered w-full"
          onChange={(e) =>
            setFilters({ ...filters, category: e.target.value })
          }
        >
          <option value="">Todas</option>
          <option value="Audifonos">Audifonos</option>
          <option value="Parlantes">Parlantes</option>
          <option value="Relojes">Relojes</option>
          <option value="Laptops">Portátiles</option>
          <option value="Celulares">Celulares</option>
          <option value="Cameras">Cámaras</option>
          <option value="Starlink"> Starlink</option>
        </select>
      </div>
    </div>
  );
}