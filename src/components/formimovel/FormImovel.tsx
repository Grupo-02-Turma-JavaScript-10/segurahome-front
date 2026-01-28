export default function FormImovel() {
  return (
    <section className="max-w-4xl p-8 mx-auto bg-[#202830]/60 backdrop-blur-xl border border-white/10 rounded-[24px] shadow-2xl">
      <h2 className="text-2xl font-bold text-white text-center mb-8 uppercase tracking-tighter">
        Cadastro de <span className="text-[#00A050]">Imóvel</span>
      </h2>

      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          
          {/* Tipo do Imóvel - Ocupa 2 colunas no desktop */}
          <div className="sm:col-span-2">
            <label className="text-sm font-bold text-gray-300 ml-1" htmlFor="tipo">Tipo do Imóvel</label>
            <input 
              id="tipo" 
              type="text" 
              placeholder="Ex: Casa Alvenaria, Apartamento..."
              className="block w-full px-4 py-3 mt-2 text-white bg-black/30 border border-white/10 rounded-xl focus:border-[#00A050]/50 focus:ring-1 focus:ring-[#00A050]/50 outline-none transition-all placeholder:text-gray-600"
            />
          </div>

          {/* Rua */}
          <div>
            <label className="text-sm font-bold text-gray-300 ml-1" htmlFor="rua">Rua</label>
            <input id="rua" type="text" className="block w-full px-4 py-3 mt-2 text-white bg-black/30 border border-white/10 rounded-xl focus:border-[#00A050]/50 outline-none transition-all" />
          </div>

          {/* Número */}
          <div>
            <label className="text-sm font-bold text-gray-300 ml-1" htmlFor="numero">Número</label>
            <input id="numero" type="text" className="block w-full px-4 py-3 mt-2 text-white bg-black/30 border border-white/10 rounded-xl focus:border-[#00A050]/50 outline-none transition-all" />
          </div>

          {/* Bairro */}
          <div>
            <label className="text-sm font-bold text-gray-300 ml-1" htmlFor="bairro">Bairro</label>
            <input id="bairro" type="text" className="block w-full px-4 py-3 mt-2 text-white bg-black/30 border border-white/10 rounded-xl focus:border-[#00A050]/50 outline-none transition-all" />
          </div>

          {/* Área */}
          <div>
            <label className="text-sm font-bold text-gray-300 ml-1" htmlFor="area">Área Construída (m²)</label>
            <input id="area" type="number" className="block w-full px-4 py-3 mt-2 text-white bg-black/30 border border-white/10 rounded-xl focus:border-[#00A050]/50 outline-none transition-all" />
          </div>

          {/* Valor do Seguro */}
          <div>
            <label className="text-sm font-bold text-gray-300 ml-1" htmlFor="valor">Valor do Seguro (R$)</label>
            <input id="valor" type="text" className="block w-full px-4 py-3 mt-2 text-white bg-black/30 border border-white/10 rounded-xl focus:border-[#00A050]/50 outline-none transition-all" />
          </div>

          {/* Seleção do Plano */}
          <div>
            <label className="text-sm font-bold text-gray-300 ml-1" htmlFor="plano">Plano de Seguro</label>
            <select id="plano" className="block w-full px-4 py-3 mt-2 text-white bg-black/30 border border-white/10 rounded-xl focus:border-[#00A050]/50 outline-none transition-all">
              <option className="bg-[#202830]">Plano 1</option>
              <option className="bg-[#202830]">Plano 2</option>
              <option className="bg-[#202830]">Plano 3</option>
            </select>
          </div>
        </div>

        {/* Botões */}
        <div className="flex justify-end gap-4 mt-10">
          <button type="button" className="px-8 py-3 text-sm font-bold text-white transition-all border border-white/10 rounded-full hover:bg-white/5">
            Cancelar
          </button>
          <button type="submit" className="px-10 py-3 text-sm font-bold text-white bg-[#00A050]/80 rounded-full shadow-[0_10px_22px_rgba(0,160,80,0.2)] hover:bg-[#00A050] transition-all transform hover:-translate-y-1">
            Salvar Imóvel
          </button>
        </div>
      </form>
    </section>
  )
}