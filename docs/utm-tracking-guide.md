# Guia de Rastreamento UTM - Mulheres de Honra

## 📊 **Sistema de Rastreamento Implementado**

O sistema captura automaticamente a origem dos visitantes e envia esses dados junto com a inscrição para análise de performance das campanhas.

## 🎯 **Fontes de Tráfego Configuradas**

### **1. Facebook Ads**
\`\`\`
https://mulheresdehonra.com.br/?utm_source=facebook&utm_medium=cpc&utm_campaign=evento_2026&utm_content=video_palestrantes
\`\`\`

### **2. Instagram Bio**
\`\`\`
https://mulheresdehonra.com.br/?utm_source=instagram&utm_medium=bio&utm_campaign=perfil_oficial
\`\`\`

### **3. WhatsApp Direto**
\`\`\`
https://mulheresdehonra.com.br/?utm_source=whatsapp&utm_medium=message&utm_campaign=contatos_eventos
\`\`\`

## 🔧 **Parâmetros UTM Suportados**

| Parâmetro | Descrição | Exemplo |
|-----------|-----------|---------|
| `utm_source` | Origem do tráfego | facebook, instagram, whatsapp |
| `utm_medium` | Meio/canal | cpc, bio, message, organic |
| `utm_campaign` | Nome da campanha | evento_2026, perfil_oficial |
| `utm_term` | Palavra-chave (opcional) | mulheres_honra, evento_gratuito |
| `utm_content` | Conteúdo específico | video_palestrantes, post_stories |
| `utm_id` | ID da campanha (opcional) | fb_001, ig_bio_001 |

## 📈 **Dados Enviados ao Backend**

\`\`\`json
{
  "nome": "Maria Silva",
  "telefone": "11999999999",
  "cpf": "12345678901",
  "eventoId": 1,
  "situacao": "registrado",
  "origem": "Facebook Ads",
  "utm_source": "facebook",
  "utm_medium": "cpc",
  "utm_campaign": "evento_2026",
  "utm_term": "mulheres_honra",
  "utm_content": "video_palestrantes",
  "utm_id": "fb_001",
  "referrer": "https://facebook.com",
  "landing_page": "https://mulheresdehonra.com.br/?utm_source=facebook&utm_medium=cpc",
  "user_agent": "Mozilla/5.0...",
  "session_id": "session_1234567890_abc123",
  "timestamp_acesso": "2025-01-30T15:30:00.000Z"
}
\`\`\`

## 🎨 **Links Recomendados para Campanhas**

### **Facebook Ads - Vídeo das Palestrantes**
\`\`\`
https://mulheresdehonra.com.br/?utm_source=facebook&utm_medium=cpc&utm_campaign=evento_2026&utm_content=video_palestrantes&utm_term=mulheres_honra
\`\`\`

### **Facebook Ads - Carrossel de Fotos**
\`\`\`
https://mulheresdehonra.com.br/?utm_source=facebook&utm_medium=cpc&utm_campaign=evento_2026&utm_content=carrossel_fotos&utm_term=evento_gratuito
\`\`\`

### **Instagram Bio**
\`\`\`
https://mulheresdehonra.com.br/?utm_source=instagram&utm_medium=bio&utm_campaign=perfil_oficial
\`\`\`

### **Instagram Stories**
\`\`\`
https://mulheresdehonra.com.br/?utm_source=instagram&utm_medium=stories&utm_campaign=stories_palestrantes&utm_content=swipe_up
\`\`\`

### **WhatsApp - Lista de Contatos**
\`\`\`
https://mulheresdehonra.com.br/?utm_source=whatsapp&utm_medium=message&utm_campaign=contatos_eventos&utm_content=lista_anterior
\`\`\`

### **WhatsApp - Grupos**
\`\`\`
https://mulheresdehonra.com.br/?utm_source=whatsapp&utm_medium=group&utm_campaign=grupos_mulheres&utm_content=convite_grupo
\`\`\`

## 📊 **Relatórios Disponíveis**

O sistema permite análise por:

- **Origem**: Facebook Ads, Instagram Bio, WhatsApp, etc.
- **Campanha**: Qual campanha específica trouxe mais inscrições
- **Conteúdo**: Qual tipo de conteúdo converte melhor
- **Período**: Análise temporal das inscrições
- **Dispositivo**: Desktop vs Mobile (via user_agent)

## 🔍 **Como Testar**

1. **Acesse com UTMs**: `https://mulheresdehonra.com.br/?utm_source=teste&utm_medium=manual&utm_campaign=debug`
2. **Abra o Console**: F12 → Console
3. **Verifique os logs**: Dados de rastreamento aparecerão no console
4. **Faça uma inscrição**: Os dados UTM serão enviados junto

## 🚀 **Implementação Técnica**

- **Captura automática** na primeira visita
- **Armazenamento local** para persistir dados entre páginas
- **Envio junto com inscrição** para o backend
- **Identificação inteligente** da origem baseada em UTMs e referrer
- **Session tracking** para análise de jornada do usuário

## 📱 **Compatibilidade**

- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Mobile (iOS Safari, Android Chrome)
- ✅ Redes sociais (Facebook, Instagram in-app browsers)
- ✅ WhatsApp Web e App
