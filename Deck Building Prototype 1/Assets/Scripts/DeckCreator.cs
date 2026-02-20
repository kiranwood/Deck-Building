using UnityEngine;

/// <summary>
/// Lives in the deck builder scene.
/// Spawns deck prefabs, grabs their Deck component, names them,
/// and registers them with the DeckManager.
/// </summary>
public class DeckCreator : MonoBehaviour
{
    [Header("UI")]
    [SerializeField] private Transform deckPanel;   // Parent panel where deck prefabs are spawned
    [SerializeField] private GameObject deckPrefab; // Prefab with Deck MonoBehaviour on the root

    /// <summary>
    /// Creates a new deck. Hook this up to your "Add Deck" button.
    /// </summary>
    public void AddDeck()
    {
        if (DeckManager.Instance.IsAtCapacity())
        {
            Debug.LogWarning("DeckCreator: Max decks reached. Cannot create a new deck.");
            return;
        }

        // Spawn the prefab inside the panel
        GameObject spawnedDeck = Instantiate(deckPrefab, deckPanel);

        // Get the Deck component directly from the prefab root
        Deck deck = spawnedDeck.GetComponent<Deck>();

        if (deck == null)
        {
            Debug.LogError("DeckCreator: No Deck component found on the prefab root. Check your prefab.");
            Destroy(spawnedDeck);
            return;
        }

        // Name it — Deck.SetName() handles updating the TMP label internally
        int deckNumber = DeckManager.Instance.DeckCount + 1;
        deck.SetName("A beautiful deck " + deckNumber);

        // Hand it off to the manager
        DeckManager.Instance.RegisterDeck(deck);
    }
}