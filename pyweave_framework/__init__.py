from importlib.resources import files


def skeleton_root():
    return files("pyweave_framework") / "skeleton"
