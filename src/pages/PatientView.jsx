export default function PatientView() {
  return (
    <div className="min-h-screen bg-slate-50 p-4">
      <div className="mx-auto w-full max-w-md">
        <header className="mb-6">
          <h1 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
            Cadastro de paciente
          </h1>
        </header>

        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700">
              Nome completo
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-400"
              placeholder="Nome"
              autoComplete="name"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              CPF
            </label>
            <input
              type="text"
              inputMode="numeric"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-400"
              placeholder="000.000.000-00"
              autoComplete="off"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Data de nascimento
            </label>
            <input
              type="date"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-400"
              autoComplete="bday"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Celular
            </label>
            <input
              type="tel"
              inputMode="tel"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-400"
              placeholder="Telefone"
              autoComplete="tel"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Endereço
            </label>
              <div className="grid grid-cols-2 gap-3 text-slate-500">
                <label className="text-xs">
                  Rua
                </label>
                <input
                  type="text"
                  inputMode="text"
                  placeholder="Rua, Logradouro, Avenida..."
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-400"
                />
                <label className="text-xs">
                  Número
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Número"
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-400"
                />
                <label className="text-xs">
                  Bairro
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Bairro"
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-400"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 text-slate-500">
                <label className="text-xs">
                  Cidade
                </label>
                <input
                  type="text"
                  inputMode="text"
                  placeholder="Cidade"
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-400"
                />
                <label className="text-xs">
                  Estado
                </label>
                <input
                  type="text"
                  inputMode="text"
                  placeholder="Estado"
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-400"
                />
              </div>

          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Contato de emergencia 1
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-400"
              placeholder="Descrição"
              autoComplete="off"
            />
            <input
              type="tel"
              inputMode="tel"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-400"
              placeholder="Telefone"
              autoComplete="tel"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Contato de emergencia 2
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-400"
              placeholder="Descrição"
              autoComplete="off"
            />
            <input
              type="tel"
              inputMode="tel"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-400"
              placeholder="Telefone"
              autoComplete="tel"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-slate-900 py-3 text-base font-semibold text-white hover:bg-slate-800"
          >
            Salvar paciente
          </button>
        </form>
      </div>
    </div>
  )
}
