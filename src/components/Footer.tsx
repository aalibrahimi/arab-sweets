import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-rose-700 dark:bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-pink-400">Our Story</Link></li>
                <li><Link href="#" className="hover:text-pink-400">Careers</Link></li>
                <li><Link href="#" className="hover:text-pink-400">Social Impact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-pink-400">Contact Us</Link></li>
                {/* <li><Link href="#" className="hover:text-pink-400">FAQs</Link></li>
                <li><Link href="#" className="hover:text-pink-400">Store Locator</Link></li> */}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-pink-400">Menu</Link></li>
                <li><Link href="#" className="hover:text-pink-400">Rewards</Link></li>
                <li><Link href="#" className="hover:text-pink-400">Gift Cards</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-2xl hover:text-pink-400">
                  <i className="fab fa-facebook"></i>
                </Link>
                <Link href="#" className="text-2xl hover:text-pink-400">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link href="#" className="text-2xl hover:text-pink-400">
                  <i className="fab fa-twitter"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p>&copy; {new Date().getFullYear()} Arab Sweets. All rights reserved.</p>
          </div>
        </div>
        </footer>
    )
}