from pyweave import create_app
from pyweave_spa import init_spa
from pyweave_pwa import init_pwa

app = create_app(
    __name__,
    pages_path="app/pages",
    template_folder="templates",
    static_folder="static",
    frontend_stack="{{ stack }}",
)

init_spa(app)
init_pwa(app, pages_path="app/pages")
