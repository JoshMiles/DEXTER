package me.thepokedex.dexter;

import android.net.Uri;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.view.MenuItem;
import android.widget.ListView;
import android.widget.TextView;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity
        implements  Pokedex.OnFragmentInteractionListener,
                    Pokestops.OnFragmentInteractionListener,
                    Atlas.OnFragmentInteractionListener,
                    Pokemon.OnFragmentInteractionListener
        {

    private TextView mTextMessage;
    private ActionBar toolbar;
    ArrayList<String> tutorialList = new ArrayList<String>();
    ListView listView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        toolbar = getSupportActionBar();

        toolbar.setTitle(R.string.title_pokedex);
        loadFragment(new Pokedex());

        BottomNavigationView navigation = (BottomNavigationView) findViewById(R.id.navigation);
        navigation.setOnNavigationItemSelectedListener(mOnNavigationItemSelectedListener);

    }

    private BottomNavigationView.OnNavigationItemSelectedListener mOnNavigationItemSelectedListener
            = new BottomNavigationView.OnNavigationItemSelectedListener() {

        @Override
        public boolean onNavigationItemSelected(@NonNull MenuItem item) {
            Fragment fragment;
            switch (item.getItemId()) {
                case R.id.navigation_pokedex:
                    toolbar.setTitle(R.string.title_pokedex);
                    fragment = new Pokedex();
                    loadFragment(fragment);
                    return true;
                case R.id.navigation_pokestops:
                    toolbar.setTitle(R.string.title_pokestops);
                    fragment = new Pokestops();
                    loadFragment(fragment);
                    return true;
                case R.id.navigation_atlas:
                    toolbar.setTitle(R.string.title_atlas);
                    fragment = new Atlas();
                    loadFragment(fragment);
                    return true;
            }
            return false;
        }
    };

    public void loadFragment(Fragment fragment){
        FragmentTransaction transaction = getSupportFragmentManager().beginTransaction();
        transaction.replace(R.id.frame_container, fragment);
        transaction.addToBackStack(null);
        transaction.commit();
    }

    @Override
    public void onBackPressed() {
        loadFragment(new Pokedex());
        return;
    }

    @Override
    public void onFragmentInteraction(Uri uri){

    }
}
