echo "🔄 Sincronizando o banco de dados..."
if ! npx prisma generate; then
  echo "❌ Falha ao sincronizar o banco de dados."
  exit 1
fi

echo "🔄 Executando as migrações..."
if ! npx prisma migrate deploy; then
  echo "❌ Falha ao executar as migrações."
  exit 1
fi

echo "🌱 Rodando seed..."
if ! npx prisma db seed; then
  echo "❌ Falha ao rodar seed."
  exit 1
fi

echo "🚀 Atualizando jogos da FURIA..."
if ! npm run updateMatches; then
  echo "❌ Falha ao rodar updateMatches."
  exit 1
fi

echo "🚀 Iniciando o servidor..."
exec npx tsx watch src/server.ts
