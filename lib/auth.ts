export interface User {
  id: string
  username: string
  role: "admin" | "user"
}

export interface Student {
  id: string
  name: string
  email: string
  phone: string
  course: "mentoria" | "presencial"
  coursePrice: number
  courseName: string
  purchaseDate: string
  status: "active" | "inactive" | "pending"
  avatar?: string
}

// Dados mockados para demonstração
export const mockUsers: User[] = [
  {
    id: "1",
    username: "admin",
    role: "admin",
  },
]

export const mockStudents: Student[] = [
  {
    id: "1",
    name: "João Silva",
    email: "joao.silva@email.com",
    phone: "(11) 99999-1111",
    course: "mentoria",
    coursePrice: 190,
    courseName: "Mentoria Estratégica",
    purchaseDate: "2024-01-15",
    status: "active",
  },
  {
    id: "2",
    name: "Maria Santos",
    email: "maria.santos@email.com",
    phone: "(11) 99999-2222",
    course: "presencial",
    coursePrice: 150,
    courseName: "Presencial Tático",
    purchaseDate: "2024-01-20",
    status: "active",
  },
  {
    id: "3",
    name: "Carlos Oliveira",
    email: "carlos.oliveira@email.com",
    phone: "(11) 99999-3333",
    course: "mentoria",
    coursePrice: 190,
    courseName: "Mentoria Estratégica",
    purchaseDate: "2024-01-25",
    status: "pending",
  },
  {
    id: "4",
    name: "Ana Costa",
    email: "ana.costa@email.com",
    phone: "(11) 99999-4444",
    course: "presencial",
    coursePrice: 150,
    courseName: "Presencial Tático",
    purchaseDate: "2024-02-01",
    status: "active",
  },
  {
    id: "5",
    name: "Pedro Almeida",
    email: "pedro.almeida@email.com",
    phone: "(11) 99999-5555",
    course: "mentoria",
    coursePrice: 190,
    courseName: "Mentoria Estratégica",
    purchaseDate: "2024-02-05",
    status: "inactive",
  },
]

export const authenticate = (username: string, password: string): User | null => {
  // Credenciais de teste: admin / admin123
  if (username === "admin" && password === "admin123") {
    return mockUsers[0]
  }
  return null
}

export const getStudents = (): Student[] => {
  return mockStudents
}
