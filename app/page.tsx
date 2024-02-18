import ToolWork from "../components/toolwork";

export default function Page() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-5">Mbote, sAEL bATUTA nKUMA 👋</h1>
            <p>Je suis un développeur. Je travaille actuellement en tant developpeur et Team-Leader chez <a className="text-blue-500" href="http://uhtec.net">Univers High Technology</a>, d'où j'aide à enseigner la programmation, construit des application.</p><br />
            <p>Je crée du contenu éducatif pour les développeurs, en leur enseignant le développement Web, JavaScript et TypeScript, React et Next.js, et plus encore. Cela se présente sous toutes les formes : articles de blog, vidéos, tweets, conférences et ateliers. Vous pouvez regarder certains de mes favoris ci-dessous.</p> <br />
            <p>Au cours de la dernière décennie, j'ai écrit du contenu sur mon blog et ma newsletter. J'essaie de garder les choses simples. Vous trouverez des écrits sur les technologies qui m'intéressent à l'époque, ou sur la façon dont j'apprends et évolue dans ma carrière, en partageant mes connaissances tout au long du chemin.</p> <br />
            <ToolWork/>
        </div>
    )
}