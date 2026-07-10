from importlib.resources import files


def skeleton_root():
    return files("pyinert_framework") / "skeleton"
