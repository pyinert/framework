from pathlib import Path

from pyinert import create_app
from pyinert_spa import init_spa
from pyinert_pwa import init_pwa

BASE_DIR = Path(__file__).resolve().parents[1]

app = create_app(
    __name__,
    routes_path=BASE_DIR / "app" / "routes",
    template_folder=BASE_DIR / "templates",
    static_folder=BASE_DIR / "static",
)

init_spa(app)
init_pwa(app, routes_path="app/routes")

if __name__ == "__main__":
    app.run(debug=True)
