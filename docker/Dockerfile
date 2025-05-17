FROM node:18
WORKDIR /app
COPY backend /app/backend
RUN cd backend && npm install
CMD ["node", "backend/src/app.js"]