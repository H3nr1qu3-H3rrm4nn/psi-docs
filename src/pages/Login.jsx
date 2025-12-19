export default function Login(){
    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50">
            <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow">
                <h1 className="text-xl font-semibold">psi-docs</h1>

                <form className="mt-6 space-y-4">
                    <div>
                        <label className="text-sm font-medium">Email</label>
                        <input
                        type="email"
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400"
                        placeholder="voce@exemplo.com"
                        autoComplete="email"
                        />
                    </div>

                    <div>
                        <label classsName="text-sm font-medium">Senha</label>
                        <input
                        type="password"
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400"
                        placeholder="*******"
                        autocomplete="current-password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-slate-900 py-2 font-medium text-white hover:bg-slate-800">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    )
}