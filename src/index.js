import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from './routes/invoice';
import ToDoList from './routes/todo/todo-list';
import TodoCreateAndEdit from './routes/todo/todo-create-edit';
import ViewModel from './routes/viewModel';
import URefExample from './routes/uRefExample';
import UEffectExample from './routes/uEffectExample';
import UMemoAndCallBack from './routes/uMemoCallBack';
import DebounceForm from './routes/debounce/form';
import SearchPage from './routes/search/search-page';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App tab="home" />}>
        <Route path="todos" element={<ToDoList />}>
          
        </Route>
        <Route path="viewmodel" element={<ViewModel />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="debounce" element={<DebounceForm />} />
        <Route path="ueffect" element={<UEffectExample title='Power Geoff' />} />
        <Route path="umemo" element={<UMemoAndCallBack />} />
        
        <Route path="uref" element={<URefExample />} />
        <Route path="viewmodel/:modelId" element={<ViewModel />} />
        <Route path="todos/create" element={<TodoCreateAndEdit />} />
        <Route path="todos/edit/:todoId" element={<TodoCreateAndEdit />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
    
  </BrowserRouter>
);