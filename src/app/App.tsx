import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Calendar, MapPin, Tv, Users, Trophy } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Trophy className="w-8 h-8 text-green-600" />
            <h1 className="text-3xl font-bold text-gray-900">CAN 2025 - Tunisie vs Ouganda</h1>
          </div>
        </div>
      </header>

      {/* Google AdSense - Header Banner */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <p className="text-gray-500 text-sm">Google AdSense - Bannière Header (970x90)</p>
            <p className="text-xs text-gray-400 mt-1">Remplacez ceci par votre code AdSense</p>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Google AdSense - Top Banner */}
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 mb-8 text-center">
          <p className="text-gray-500 text-sm">Google AdSense - Bannière publicitaire (728x90)</p>
          <p className="text-xs text-gray-400 mt-2">Remplacez ceci par votre code AdSense</p>
        </div>

        {/* Match Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Tunisia */}
            <div className="text-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1726428977757-e724066e4447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dW5pc2lhJTIwZm9vdGJhbGwlMjB0ZWFtfGVufDF8fHx8MTc2NjUxMDA2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Équipe de Tunisie"
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4 shadow-xl"
              />
              <h2 className="text-2xl font-bold text-red-600">Tunisie</h2>
              <p className="text-gray-600">Les Aigles de Carthage</p>
            </div>

            {/* VS */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-6">
                <p className="text-sm mb-2">Match de Groupe</p>
                <p className="text-4xl font-bold mb-2">VS</p>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>Date à confirmer - CAN 2025</span>
                </div>
              </div>
            </div>

            {/* Uganda */}
            <div className="text-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1718440821712-258a1addf2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1Z2FuZGElMjBmb290YmFsbCUyMHRlYW18ZW58MXx8fHwxNzY2NTEwMDYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Équipe d'Ouganda"
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4 shadow-xl"
              />
              <h2 className="text-2xl font-bold text-yellow-600">Ouganda</h2>
              <p className="text-gray-600">Les Grues</p>
            </div>
          </div>
        </div>

        {/* Google AdSense - In-Content Ad 1 */}
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 mb-8 text-center">
          <p className="text-gray-500 text-sm">Google AdSense - Publicité In-Feed (728x90)</p>
          <p className="text-xs text-gray-400 mt-2">Remplacez ceci par votre code AdSense</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stadium Info */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1649523724085-8394f44a4504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZm9vdGJhbGwlMjBzdGFkaXVtfGVufDF8fHx8MTc2NjUwOTQ4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Stade"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-6 h-6 text-red-600" />
                  <h3 className="text-2xl font-bold">Stade du Match</h3>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Lieu:</strong> Stade à confirmer (Maroc)</p>
                  <p><strong>Capacité:</strong> 45,000+ spectateurs</p>
                  <p><strong>Horaire:</strong> À confirmer (heure locale)</p>
                </div>
              </div>
            </div>

            {/* Google AdSense - In-Content Ad 2 */}
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <p className="text-gray-500 text-sm">Google AdSense - Publicité de contenu (336x280)</p>
              <p className="text-xs text-gray-400 mt-2">Remplacez ceci par votre code AdSense</p>
            </div>

            {/* Team Compositions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-6">
                <Users className="w-6 h-6 text-green-600" />
                <h3 className="text-2xl font-bold">Compositions Probables</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Tunisia */}
                <div>
                  <h4 className="font-bold text-lg mb-4 text-red-600">🇹🇳 Tunisie (4-3-3)</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm text-gray-500">Gardien</p>
                      <p>Aymen Dahmen</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-500">Défenseurs</p>
                      <p>Ali Maaloul, Yassine Meriah, Montassar Talbi, Hamza Mathlouthi</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-500">Milieux</p>
                      <p>Aïssa Laïdouni, Ellyes Skhiri, Mohamed Ali Ben Romdhane</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-500">Attaquants</p>
                      <p>Youssef Msakni, Wahbi Khazri, Seifeddine Jaziri</p>
                    </div>
                  </div>
                </div>

                {/* Uganda */}
                <div>
                  <h4 className="font-bold text-lg mb-4 text-yellow-600">🇺🇬 Ouganda (4-4-2)</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm text-gray-500">Gardien</p>
                      <p>Ismail Watenga</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-500">Défenseurs</p>
                      <p>Elvis Bwomono, Bevis Mugabi, Halid Lwaliwa, Aziz Kayondo</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-500">Milieux</p>
                      <p>Khalid Aucho, Moses Waiswa, Bobosi Byaruhanga, Allan Okello</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-500">Attaquants</p>
                      <p>Emmanuel Okwi, Fahad Bayo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google AdSense - In-Content Ad 3 */}
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <p className="text-gray-500 text-sm">Google AdSense - Publicité rectangulaire (300x250)</p>
              <p className="text-xs text-gray-400 mt-2">Remplacez ceci par votre code AdSense</p>
            </div>

            {/* Player Spotlight */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1629977007371-0ba395424741?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBwbGF5ZXIlMjBhY3Rpb258ZW58MXx8fHwxNzY2NTEwMDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Joueur en action"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Joueurs à Suivre</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-l-4 border-red-600 pl-4">
                    <p className="font-bold">Wahbi Khazri</p>
                    <p className="text-sm text-gray-600">Capitaine de la Tunisie, meneur de jeu expérimenté</p>
                  </div>
                  <div className="border-l-4 border-yellow-600 pl-4">
                    <p className="font-bold">Fahad Bayo</p>
                    <p className="text-sm text-gray-600">Attaquant ougandais, buteur redoutable</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google AdSense - In-Content Ad 4 */}
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <p className="text-gray-500 text-sm">Google AdSense - Publicité horizontale (728x90)</p>
              <p className="text-xs text-gray-400 mt-2">Remplacez ceci par votre code AdSense</p>
            </div>

            {/* Broadcasting Info */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Tv className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Comment Regarder le Match</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <h4 className="font-bold mb-2">📺 Chaînes TV Françaises</h4>
                  <ul className="space-y-1">
                    <li>• beIN Sports 1 (Chaîne principale CAN)</li>
                    <li>• L'Équipe (Chaîne gratuite, matchs sélectionnés)</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <h4 className="font-bold mb-2">💻 Streaming en Direct</h4>
                  <ul className="space-y-1">
                    <li>• <strong>beIN Sports Connect</strong> - Abonnement beIN Sports</li>
                    <li>• <strong>6play</strong> - Si diffusion sur M6/W9</li>
                    <li>• <strong>L'Équipe Live</strong> - Application et site web</li>
                    <li>• <strong>MyCanal</strong> - Avec abonnement Canal+</li>
                  </ul>
                </div>

                <div className="bg-yellow-500/20 backdrop-blur rounded-lg p-4 border border-yellow-400/50">
                  <p className="text-sm">
                    ⚠️ <strong>Note:</strong> Vérifiez la programmation officielle avant le match. Les droits de diffusion peuvent varier selon les matchs de la CAN.
                  </p>
                </div>
              </div>
            </div>

            {/* Google AdSense - Content Ad */}
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <p className="text-gray-500 text-sm">Google AdSense - Publicité de contenu (336x280)</p>
              <p className="text-xs text-gray-400 mt-2">Remplacez ceci par votre code AdSense</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Google AdSense - Sidebar Top */}
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <p className="text-gray-500 text-sm">Google AdSense</p>
              <p className="text-xs text-gray-400 mt-2">Publicité sidebar (300x250)</p>
              <p className="text-xs text-gray-400 mt-2">Remplacez par votre code AdSense</p>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-lg mb-4">Statistiques Rapides</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-600">Confrontations</span>
                  <span className="font-bold">8 matchs</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-600">Victoires Tunisie</span>
                  <span className="font-bold text-red-600">5</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-600">Matchs nuls</span>
                  <span className="font-bold text-gray-500">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Victoires Ouganda</span>
                  <span className="font-bold text-yellow-600">1</span>
                </div>
              </div>
            </div>

            {/* Google AdSense - Sidebar Middle */}
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center sticky top-4">
              <p className="text-gray-500 text-sm">Google AdSense</p>
              <p className="text-xs text-gray-400 mt-2">Publicité sidebar (300x600)</p>
              <p className="text-xs text-gray-400 mt-2">Remplacez par votre code AdSense</p>
            </div>

            {/* Google AdSense - Small Ad */}
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <p className="text-gray-500 text-xs">AdSense (250x250)</p>
            </div>

            {/* Google AdSense - Sidebar Bottom */}
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <p className="text-gray-500 text-xs">AdSense (300x250)</p>
              <p className="text-xs text-gray-400 mt-1">Remplacez par votre code</p>
            </div>
          </div>
        </div>

        {/* Google AdSense - Bottom Banner 1 */}
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 mt-8 text-center">
          <p className="text-gray-500 text-sm">Google AdSense - Bannière publicitaire (970x250)</p>
          <p className="text-xs text-gray-400 mt-2">Remplacez ceci par votre code AdSense</p>
        </div>

        {/* Google AdSense - Bottom Banner 2 */}
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 mt-6 text-center">
          <p className="text-gray-500 text-sm">Google AdSense - Bannière publicitaire bas de page (728x90)</p>
          <p className="text-xs text-gray-400 mt-2">Remplacez ceci par votre code AdSense</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            © 2025 - Toutes les informations sont données à titre indicatif. Vérifiez les sources officielles pour les dernières mises à jour.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            CAN 2025 - Coupe d'Afrique des Nations
          </p>
        </div>
      </footer>
    </div>
  );
}