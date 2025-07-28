'use client'

export default function EnvDebug() {
  const envVars = {
    backend: process.env.NEXT_PUBLIC_BACKEND_API_KEY,
    evolution: process.env.NEXT_PUBLIC_EVOLUTION_API_PUBLIC_API_KEY,
    nodeEnv: process.env.NODE_ENV,
    allEnvKeys: Object.keys(process.env).filter(key => key.startsWith('NEXT_PUBLIC'))
  };

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      right: 0, 
      background: 'rgba(0,0,0,0.9)', 
      color: 'white', 
      padding: '15px',
      fontSize: '12px',
      zIndex: 9999,
      maxWidth: '400px',
      borderRadius: '0 0 0 10px'
    }}>
      <h4>🔧 ENV DEBUG (REMOVER EM PROD)</h4>
      <div style={{ marginBottom: '10px' }}>
        <strong>Backend API:</strong> {envVars.backend ? '✅ Presente' : '❌ Ausente'}
        {envVars.backend && <div>Valor: {envVars.backend.substring(0, 10)}...</div>}
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <strong>Evolution API:</strong> {envVars.evolution ? '✅ Presente' : '❌ Ausente'}
        {envVars.evolution && <div>Valor: {envVars.evolution.substring(0, 10)}...</div>}
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <strong>Node ENV:</strong> {envVars.nodeEnv}
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <strong>Todas NEXT_PUBLIC vars:</strong>
        <div>{envVars.allEnvKeys.length > 0 ? envVars.allEnvKeys.join(', ') : 'Nenhuma encontrada'}</div>
      </div>

      <div style={{ marginTop: '10px', fontSize: '10px', opacity: 0.8 }}>
        💡 Se as variáveis estão ausentes, o problema está no build do Docker
      </div>
    </div>
  );
}
