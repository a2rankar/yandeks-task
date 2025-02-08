/**
 * @param {{
*  graph: Record<string, string[]>,
*  startVertex: string,
*  endVertex: string,
* }}
* @returns {string[]}
*/
module.exports = function solution({ graph, startVertex, endVertex }) {
   // Если начальная и конечная вершины совпадают, сразу возвращаем их
   if (startVertex === endVertex) return [startVertex];

   let queue = [[startVertex]];  // Очередь путей
   let visited = new Set();      // Посещенные вершины
   visited.add(startVertex);

   while (queue.length > 0) {
       let path = queue.shift(); // Берем первый путь из очереди
       let lastNode = path[path.length - 1]; // Последний человек в пути

       if (!graph[lastNode]) continue; // Если у человека нет знакомых, пропускаем

       for (let neighbor of graph[lastNode]) {
           if (!visited.has(neighbor)) {  // Если человека еще не проверяли
               let newPath = [...path, neighbor]; // Создаем новый путь

               if (neighbor === endVertex) {  // Если дошли до цели — возвращаем путь
                   return newPath;
               }

               queue.push(newPath); // Добавляем новый путь в очередь
               visited.add(neighbor); // Отмечаем человека как проверенного
           }
       }
   }

   return []; // Если путь не найден
};
