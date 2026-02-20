using UnityEditor;
using UnityEngine;
using UnityEngine.SceneManagement;

public class SceneManagement : MonoBehaviour
{
    public void QuitApplication()
    {
        Application.Quit();

#if UNITY_EDITOR
        EditorApplication.isPlaying = false; // Stops Play Mode
#endif

    }

    public void MoveToDeckScreen()
    {
        SceneManager.LoadScene("DeckScreen");
    }


    public void MoveToMainScene()
    {
        SceneManager.LoadScene("MainMenu");
    }
}
