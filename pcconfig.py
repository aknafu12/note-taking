import pynecone as pc


config = pc.Config(
    app_name="counterAPP",
    
    db_url="sqlite:///pynecone.db",
    env=pc.Env.DEV,
)
