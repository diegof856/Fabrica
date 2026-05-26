import "./Nav.css"
const navLinks =[
{href:"#Inicio", label:"Home"},
{href:"#Sobre", label:"Sobre Nós"},
{href:"#Equipe", label:"Nossa Equipe"},
{href:"#Serviços", label:"Serviços"},
{href:"#Portifolio", label:"BicoDigital"},
{href:"#Contact", label:"Contact"},
]
const Nav = () => {
  return (
   <nav className="d-flex gap-2 py-2 px-4 nav-wrapper">
{navLinks.map((obj)=>(
    <a className="text-decoration-none text-white btn-custom fs-6"key={obj.href} href={obj.href}>{obj.label}</a>
))}
   </nav>
  )
}

export default Nav